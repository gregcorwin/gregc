import { Html, Head, Preview, Tailwind, Body, Container, Heading, Text, Section } from "@react-email/components";

type Props = { name: string; previewText?: string };

export function WelcomeEmail({ name, previewText }: Props) {
  return (
    <Html>
      <Head />
      {previewText ? <Preview>{previewText}</Preview> : null}
      <Tailwind>
        <Body className="bg-[#0a0a0a] text-white">
          <Container className="mx-auto my-8 p-6 rounded-xl border border-white/10 bg-white/[0.03]">
            <Heading className="text-2xl font-semibold">Welcome, {name}!</Heading>
            <Section className="mt-2">
              <Text className="text-white/80">We’re glad you’re here. This email was rendered with React Email + Tailwind and sent via Resend.</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default WelcomeEmail;


