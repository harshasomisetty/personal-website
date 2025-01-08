'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RotateCcw, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Timer {
  id: string;
  name: string;
  endDate: Date;
  notes: string;
  length: number; // Total length in minutes
  createdAt: Date;
}

export default function TimersPage() {
  const [timers, setTimers] = useState<Timer[]>([]);
  const [newTimerName, setNewTimerName] = useState('');
  const [newTimerDays, setNewTimerDays] = useState('');
  const [newTimerHours, setNewTimerHours] = useState('');
  const [newTimerMinutes, setNewTimerMinutes] = useState('');
  const [newTimerNotes, setNewTimerNotes] = useState('');
  const [loading, setLoading] = useState(true);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    fetchTimers();
    // Update current time every second
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const fetchTimers = async () => {
    try {
      const response = await fetch('/api/timers');
      const result = await response.json();

      // Debug logging
      console.log('Timer response:', result);

      if (!response.ok) {
        throw new Error(result.error || 'Failed to fetch timers');
      }

      // Ensure we're handling the new response structure
      const timers = result.data || [];
      setTimers(timers);
    } catch (error) {
      console.error('Error fetching timers:', error);
      setTimers([]);
    } finally {
      setLoading(false);
    }
  };

  const addTimer = async () => {
    if (!newTimerName) return;

    const days = parseInt(newTimerDays) || 0;
    const hours = parseInt(newTimerHours) || 0;
    const minutes = parseInt(newTimerMinutes) || 0;

    if (days === 0 && hours === 0 && minutes === 0) return;

    const totalSeconds = days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60;
    const endDate = new Date();
    endDate.setSeconds(endDate.getSeconds() + totalSeconds);

    try {
      const response = await fetch('/api/timers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: newTimerName,
          endDate: endDate.toISOString(),
          notes: newTimerNotes,
          length: totalSeconds,
        }),
      });

      if (response.ok) {
        fetchTimers();
        setNewTimerName('');
        setNewTimerDays('');
        setNewTimerHours('');
        setNewTimerMinutes('');
        setNewTimerNotes('');
      }
    } catch (error) {
      console.error('Error creating timer:', error);
    }
  };

  const deleteTimer = async (id: string) => {
    try {
      const response = await fetch(`/api/timers/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchTimers();
      }
    } catch (error) {
      console.error('Error deleting timer:', error);
    }
  };

  const formatTimeLeft = (endDate: Date) => {
    const diff = new Date(endDate).getTime() - now.getTime();

    if (diff <= 0) return 'Completed!';

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const resetTimer = async (timer: Timer) => {
    const newEndDate = new Date();
    newEndDate.setSeconds(newEndDate.getSeconds() + timer.length);

    try {
      const response = await fetch(`/api/timers/${timer.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          endDate: newEndDate.toISOString(),
        }),
      });

      if (response.ok) {
        fetchTimers();
      }
    } catch (error) {
      console.error('Error resetting timer:', error);
    }
  };

  const formatOriginalDuration = (seconds: number) => {
    const days = Math.floor(seconds / (60 * 60 * 24));
    const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));

    // Format based on largest non-zero unit
    if (days > 0) {
      return days === Math.floor(days) ? `${days}d` : `${days}d ${hours}h`;
    }
    if (hours > 0) {
      return `${hours}h`;
    }
    return `${Math.floor(seconds / 60)}m`;
  };

  return (
    <section className="flex flex-col items-center w-full max-w-2xl mx-auto p-4">
      <h1 className="font-bold text-3xl font-serif mb-8">Timers</h1>

      <Card className="w-full mb-8">
        <CardHeader>
          <CardTitle>New Timer</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            type="text"
            placeholder="Timer Name"
            value={newTimerName}
            onChange={(e) => setNewTimerName(e.target.value)}
          />
          <div className="grid grid-cols-3 gap-4">
            <Input
              type="number"
              placeholder="Days"
              value={newTimerDays}
              onChange={(e) => setNewTimerDays(e.target.value)}
              min="0"
            />
            <Input
              type="number"
              placeholder="Hours"
              value={newTimerHours}
              onChange={(e) => setNewTimerHours(e.target.value)}
              min="0"
              max="23"
            />
            <Input
              type="number"
              placeholder="Minutes"
              value={newTimerMinutes}
              onChange={(e) => setNewTimerMinutes(e.target.value)}
              min="0"
              max="59"
            />
          </div>
          <Textarea
            placeholder="Notes"
            value={newTimerNotes}
            onChange={(e) => setNewTimerNotes(e.target.value)}
            rows={3}
          />
          <Button onClick={addTimer} className="w-full" variant="default">
            Add Timer
          </Button>
        </CardContent>
      </Card>

      <div className="w-full space-y-4">
        {timers.map((timer) => (
          <Card key={timer.id} className="w-full">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{timer.name}</h3>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => resetTimer(timer)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <RotateCcw className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteTimer(timer.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-mono flex items-baseline gap-2">
                  {formatTimeLeft(new Date(timer.endDate))}
                  <span className="text-base text-muted-foreground">
                    / {formatOriginalDuration(timer.length)}
                  </span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Started: {new Date(timer.createdAt).toLocaleString()}
                </p>
                {timer.notes && (
                  <p className="text-muted-foreground whitespace-pre-wrap mt-2">
                    {timer.notes}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
