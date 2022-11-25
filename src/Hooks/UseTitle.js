import { useEffect } from "react";

export const useTitle = title => {

    useEffect(() => {

        document.title = `T Phone-Reseller Shop -${title}`;

    }, [title]);
};