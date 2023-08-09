import { Button } from "@/components/ui/button";
import Link from "@/node_modules/next/link";

const LandingPage = () => {
  return (
    <div>
      Landing Page (Unprotected)
      <div>
        <Link href="/dashboard">
          <Button>Login</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
