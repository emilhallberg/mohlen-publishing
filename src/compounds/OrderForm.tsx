"use client";

import { FormEvent, ReactNode, useState } from "react";
import Form from "@/components/Form";
import Link from "next/link";
import Button from "@/components/Button";

type Props = { children: ReactNode };

const MAIL = "ester.mohlen@gmail.com";

const MailLink = () => (
  <Link className="hover:text-orange-200" href={`mailto:${MAIL}`}>
    {MAIL}
  </Link>
);

export default function OrderForm({ children }: Props) {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    setLoading(true);
    event.preventDefault();
    setSuccess(false);
    setError(false);

    const body = new FormData(event.currentTarget);

    return fetch("/api/order", { method: "POST", body })
      .then((response) => {
        if (response.ok) setSuccess(true);
        else setError(true);
      })
      .catch((reason) => {
        setError(true);
        console.error(reason);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  if (error) {
    return (
      <p className="w-full p-6 max-w-[1080px] text-justify lg:text-left">
        Det gick tyvärr inte lägga beställningen just nu. Testa igen eller
        kontakta mig på <MailLink />.
        <br />
        <br />
        <Button onClick={() => setError(false)}>Testa igen</Button>
      </p>
    );
  }

  if (loading) {
    return (
      <p className="w-full p-6 max-w-[1080px] text-justify lg:text-left">
        Lägger beställning...
      </p>
    );
  }

  if (success) {
    return (
      <p className="w-full p-6 max-w-[1080px] text-justify lg:text-left">
        Tack för din beställning! Jag kontaktar dig för mer information om
        leverans och betalning. Om ni har några frågor så tveka inte att
        kontakta mig på <MailLink />.
      </p>
    );
  }

  return <Form onSubmit={onSubmit}>{children}</Form>;
}
