"use client";

import React from "react";
import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";

interface ActionButtonProps {
  actionText: string;
  url: string
}

export default function ActionButton({ actionText, url }: ActionButtonProps) {
  return (
    <Button onClick={() => window.open(url)}>
      <CheckCircle className="mr-2 h-4 w-4" />
      {actionText}
    </Button>
  );
}
