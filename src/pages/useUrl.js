import { useRouter } from 'next/router';
import { useMemo } from 'react';

export default function useUrl() {
    const router = useRouter();

    const url = useMemo(() => {
        const { pathname, query } = router;
        return {
            href: router.asPath,
            pathname,
            query,
        };
    }, [router]);

    return url;
}