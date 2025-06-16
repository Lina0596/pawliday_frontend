export async function getSitter(sitterId) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitters/${sitterId}`);
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    console.log(data);
    return data;
}

export async function getOwners(sitterId) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitters/${sitterId}/owners`);
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    console.log(data);
    return data;
}

export async function getDogs(sitterId) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitters/${sitterId}/dogs`);
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    console.log(data);
    return data;
}
