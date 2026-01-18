export default function Logo() {
    return (
        <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
                <circle cx="18" cy="62" r="7" fill="#2F6EF6" />
                <path
                    d="M 18 46
       A 22 22 0 0 1 40 68"
                    fill="none"
                    stroke="#2F6EF6"
                    strokeWidth="8"
                    strokeLinecap="round"
                />
                <path
                    d="M 18 26
       A 40 40 0 0 1 58 68"
                    fill="none"
                    stroke="#2F6EF6"
                    strokeWidth="8"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
}
