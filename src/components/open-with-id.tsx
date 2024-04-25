"use client"

import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button, buttonVariants } from './ui/button';
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from './ui/card';

const OpenWithId = () => {
  const [id, setId] = useState('');

  const handleOpenQuiz = () => {
    // Open quiz with the provided ID
    window.location.href = `/quiz/${id}`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Open Quiz</CardTitle>
        <CardDescription>Enter the quiz ID to open</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row justfy-center items-center">
            <Input
            type="text"
            placeholder="Your Quiz ID..."
            value={id}
            onChange={(e) => setId(e.target.value)}
            />
            <Button
            className="ml-4"
            onClick={handleOpenQuiz}
            variant="default"
            size="sm"
            >
            Open
            </Button>
      </CardContent>
    </Card>
  );
};

export default OpenWithId;
