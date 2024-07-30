import { useEffect, useState } from "react";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export default class APIConsumer<Tin, Tout> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = apiURL + endpoint;
    }

    get(id: string) {
        const [data, setData] = useState<Tout | null>(null);
        useEffect(() => {
            fetch(`${this.endpoint}/${id}`)
                .then((response) => response.json())
                .then((data) => setData(data));
        }, []);

        console.log(`${this.endpoint}/${id} => ${data}`);
        return data as Tout;
    }

    getAll(): Tout[] {
        const [data, setData] = useState<Tout[]>([]);
        useEffect(() => {
            fetch(this.endpoint)
                .then((response) => response.json())
                .then((data) => setData(data));
        }, []);
        return data;
    }

    create(data: Tin) {
        return fetch(this.endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    }

    update(id: string, data: Tin) {
        return fetch(`${this.endpoint}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((response) => response.json());
    }

    delete(id: string) {
        return fetch(`${this.endpoint}/${id}`, {
            method: "DELETE",
        }).then((response) => response.json());
    }
}