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

export async function getOwner(sitterId, ownerId) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitters/${sitterId}/owners/${ownerId}`);
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    console.log(data);
    return data;
}

export async function addOwner(sitterId, newData) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitters/${sitterId}/owners`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newData)
    })
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    console.log(data);
    return data;
}

export async function updateOwner(sitterId, ownerId, updatedData) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitters/${sitterId}/owners/${ownerId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedData)
    })
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    console.log(data);
    return data;
}

export async function deleteOwner(sitterId, ownerId) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitters/${sitterId}/owners/${ownerId}`, {
        method: "DELETE",
    })
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

export async function getDog(sitterId, dogId) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitters/${sitterId}/dogs/${dogId}`);
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    console.log(data);
    return data;
}

export async function addDog(sitterId, ownerId, newData) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitters/${sitterId}/owners/${ownerId}/dogs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newData)
    })
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    console.log(data);
    return data;
}

export async function updateDog(sitterId, dogId, updatedData) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitters/${sitterId}/dogs/${dogId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedData)
    })
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    console.log(data);
    return data;
}

export async function deleteDog(sitterId, dogId) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitters/${sitterId}/dogs/${dogId}`, {
        method: "DELETE",
    })
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    console.log(data);
    return data;
}

export async function getAuthParams() {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/auth-params`);
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    console.log(data);
    return data;
}