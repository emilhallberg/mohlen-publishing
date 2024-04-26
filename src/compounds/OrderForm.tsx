"use client";

import { FormEvent, ReactNode } from "react";
import Form from "@/components/Form";

type Props = { children: ReactNode };

async function onSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const body = new FormData(event.currentTarget);

  return fetch("/api/order", { method: "POST", body })
    .then(console.log)
    .catch(console.error);
}

export default function OrderForm({ children }: Props) {
  return <Form onSubmit={onSubmit}>{children}</Form>;
}
