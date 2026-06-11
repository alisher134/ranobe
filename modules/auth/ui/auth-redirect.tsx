import Link from 'next/link';

type AuthRedirectProps = {
  title: string;
  linkText: string;
  redirectUrl: string;
};

export function AuthRedirect({
  title,
  linkText,
  redirectUrl,
}: AuthRedirectProps) {
  return (
    <div className="flex justify-center text-sm">
      {title}
      <Link href={redirectUrl} className="ml-1 underline">
        {linkText}
      </Link>
    </div>
  );
}
