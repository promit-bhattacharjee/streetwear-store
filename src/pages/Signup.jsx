import AuthForm from '../components/auth/AuthForm';

export default function Signup() {
    return (
        <div className="min-h-screen bg-primary pt-32 pb-20 px-4">
            <AuthForm type="signup" />
        </div>
    );
}
