let csrfToken = null;

export async function login(loginData) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: 'include',
        body: JSON.stringify(loginData)
    })
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    if (data.csrf_token) {
        csrfToken = data.csrf_token;
    }
    return data.message;
}

export async function logout() {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/logout`, {
        method: "POST",
        credentials: 'include'
    })
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    return data.message;
}

export async function registration(newData) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/registration`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newData)
    })
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    return data.message;
}

export async function getSitter() {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitter`, {
        method: "GET",
        credentials: "include",
        headers: {"X-CSRF-TOKEN": csrfToken}
    })
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    if (data.csrf_token) {
        csrfToken = data.csrf_token;
    }
    return data.sitter;
}

export async function updateSitter(updatedData) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitter/update`, {
        method: "PUT",
        credentials: 'include',
        headers: {"Content-Type": "application/json", "X-CSRF-TOKEN": csrfToken},
        body: JSON.stringify(updatedData)
    })
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    if (data.csrf_token) {
        csrfToken = data.csrf_token;
    }
    return {"sitter": data.sitter, "message": data.message};
}

export async function deleteSitter() {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitter/delete`, {
        method: "DELETE",
        credentials: 'include',
        headers: {"X-CSRF-TOKEN": csrfToken}
    })
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    if (data.csrf_token) {
        csrfToken = null;
    }
    return data.message;
}

export async function getOwners() {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitter/owners`, {
        method: "GET",
        credentials: "include",
        headers: {"X-CSRF-TOKEN": csrfToken}
    })
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    if (data.csrf_token) {
        csrfToken = data.csrf_token;
    }
    return data.owners;
}

export async function getOwner(ownerId) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitter/owners/${ownerId}`, {
        method: "GET",
        credentials: "include",
        headers: {"X-CSRF-TOKEN": csrfToken}
    })
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    if (data.csrf_token) {
        csrfToken = data.csrf_token;
    }
    return data.owner;
}

export async function addOwner(newData) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitters/owners/add`, {
        method: "POST",
        credentials: "include",
        headers: {"Content-Type": "application/json", "X-CSRF-TOKEN": csrfToken},
        body: JSON.stringify(newData)
    })
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    if (data.csrf_token) {
        csrfToken = data.csrf_token;
    }
    return data.owner;
}

export async function updateOwner(ownerId, updatedData) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitter/owners/${ownerId}/update`, {
        method: "PUT",
        credentials: "include",
        headers: {"Content-Type": "application/json", "X-CSRF-TOKEN": csrfToken},
        body: JSON.stringify(updatedData)
    })
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    if (data.csrf_token) {
        csrfToken = data.csrf_token;
    }
    return data.message;
}

export async function deleteOwner(ownerId) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitter/owners/${ownerId}/delete`, {
        method: "DELETE",
        credentials: "include",
        headers: {"X-CSRF-TOKEN": csrfToken}
    })
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    if (data.csrf_token) {
        csrfToken = data.csrf_token;
    }
    return data.message;
}

export async function getDogs() {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitter/dogs`, {
        method: "GET",
        credentials: "include",
        headers: {"X-CSRF-TOKEN": csrfToken}
    })
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    if (data.csrf_token) {
        csrfToken = data.csrf_token;
    }
    return data.dogs;
}

export async function getDog(dogId) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitter/dogs/${dogId}`, {
        method: "GET",
        credentials: "include",
        headers: {"X-CSRF-TOKEN": csrfToken}
    })
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    if (data.csrf_token) {
        csrfToken = data.csrf_token;
    }
    return data.dog;
}

export async function addDog(ownerId, newData) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitter/owners/${ownerId}/dogs/add`, {
        method: "POST",
        credentials: "include",
        headers: {"Content-Type": "application/json", "X-CSRF-TOKEN": csrfToken},
        body: JSON.stringify(newData)
    })
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    if (data.csrf_token) {
        csrfToken = data.csrf_token;
    }
    return data.dog;
}

export async function updateDog(dogId, updatedData) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitter/dogs/${dogId}/update`, {
        method: "PUT",
        credentials: "include",
        headers: {"Content-Type": "application/json", "X-CSRF-TOKEN": csrfToken},
        body: JSON.stringify(updatedData)
    })
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    if (data.csrf_token) {
        csrfToken = data.csrf_token;
    }
    return data.message;
}

export async function deleteDog(dogId) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitter/dogs/${dogId}/delete`, {
        method: "DELETE",
        credentials: "include",
        headers: {"X-CSRF-TOKEN": csrfToken}
    })
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    if (data.csrf_token) {
        csrfToken = data.csrf_token;
    }
    return data.message;
}

export async function getAuthParams() {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/auth-params`);
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    return data;
}