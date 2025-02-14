import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import GithubSignInButton from '../ui/github-auth-button';

export default function UserAuthForm() {
  return (
    <>
      <div className="w-full space-y-2">
        <Button className="ml-auto w-full bg-[#0F6466] hover:bg-[#2C3532]" onClick={() => signIn('google')}>
          Continue With Google
        </Button>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>
      <GithubSignInButton />
    </>
  );
}
