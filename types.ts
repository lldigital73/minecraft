
// Fix: Import React to resolve React.ReactNode namespace error
import React from 'react';

export interface ServerInfo {
  online: boolean;
  players?: {
    online: number;
    max: number;
  };
  version?: string;
  motd?: {
    clean: string[];
  };
}

export interface LoreEntry {
  title: string;
  content: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}