export default function EmailLanding(): JSX.Element {
  return (
    <div className="pt-24 mx-auto max-w-2xl px-4">
      <h1 className="text-3xl font-semibold text-white">Email at gregc.io</h1>
      <p className="mt-3 text-white/70">Quick links for your email setup.</p>
      <ul className="mt-6 space-y-3 text-white/90">
        <li><a className="underline" href="https://app.fastmail.com/" target="_blank" rel="noreferrer">Open Fastmail Web</a></li>
        <li><a className="underline" href="https://www.thunderbird.net/" target="_blank" rel="noreferrer">Download Thunderbird</a></li>
        <li><a className="underline" href="https://play.google.com/store/apps/details?id=net.fastmail.app" target="_blank" rel="noreferrer">Fastmail app (Android)</a></li>
        <li><a className="underline" href="/unsubscribe">Unsubscribe link</a></li>
      </ul>
    </div>
  );
}


