import { useEffect, useState } from "react";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export default class APIConsumer<Tin, Tout> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = apiURL + endpoint;
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

    get(id: string): Tout {
        const [data, setData] = useState<Tout>();
        useEffect(() => {
            fetch(`${this.endpoint}/${id}`)
                .then((response) => response.json())
                .then((data) => setData(data));
        }, [id]);
        return data as Tout;
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
        });
    }

    delete(id: string) {
        return fetch(`${this.endpoint}/${id}`, {
            method: "DELETE",
        });
    }
}