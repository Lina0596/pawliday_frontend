import Cookies from "js-cookie";

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
    console.log(data);
    return data;
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
    console.log(data);
    return data;
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
    console.log(data);
    return data;
}

export async function getSitter() {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitter`, {
        method: "GET",
        credentials: "include"
    })
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    console.log(data);
    return data;
}

export async function updateSitter(updatedData) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitter/update`, {
        method: "PUT",
        credentials: 'include',
        headers: {"Content-Type": "application/json"},
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

export async function deleteSitter() {
    const csrfToken = Cookies.get("csrf_access_token");
    console.log("CSRF Cookie Value (from js-cookie):", csrfToken);
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitter/delete`, {
        method: "DELETE",
        credentials: 'include',
        headers: {
            "X-CSRF-TOKEN": csrfToken
        }
    })
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    console.log(data);
    return data;
}


// export async function deleteSitter() {
//   console.log("[deleteSitter] starting request...");

//   const url = "https://pawliday-backend.onrender.com/api/sitter/delete";
//   console.log("[deleteSitter] URL:", url);

//   const res = await fetch(url, {
//     method: "DELETE",
//     credentials: "include",
//   });

//   console.log("[deleteSitter] Response status:", res.status, res.statusText);
//   console.log("[deleteSitter] Response headers:", Object.fromEntries(res.headers.entries()));

//   // Read raw text first so we can log even if it's not JSON
//   const raw = await res.text();
//   console.log("[deleteSitter] Raw response body:", raw);

//   let data = null;
//   try {
//     data = raw ? JSON.parse(raw) : null;
//     console.log("[deleteSitter] Parsed JSON:", data);
//   } catch (err) {
//     console.warn("[deleteSitter] Failed to parse JSON, returning raw text");
//     data = raw || null;
//   }

//   if (!res.ok) {
//     console.error("[deleteSitter] Request failed", { status: res.status, data });
//     const msg =
//       (data && (data.error || data.message)) ||
//       `HTTP ${res.status} ${res.statusText}`;
//     const e = new Error(msg);
//     e.status = res.status;
//     e.data = data;
//     throw e;
//   }

//   console.log("[deleteSitter] Success, returning data");
//   return data;
// }



export async function getOwners() {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitter/owners`, {
        method: "GET",
        credentials: "include"
    })
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    console.log(data);
    return data;
}

export async function getOwner(ownerId) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitter/owners/${ownerId}`, {
        method: "GET",
        credentials: "include"
    })
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    console.log(data);
    return data;
}

export async function addOwner(newData) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitters/owners/add`, {
        method: "POST",
        credentials: "include",
        headers: {"Content-Type": "application/json"},
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

export async function updateOwner(ownerId, updatedData) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitter/owners/${ownerId}/update`, {
        method: "PUT",
        credentials: "include",
        headers: {"Content-Type": "application/json"},
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

export async function deleteOwner(ownerId) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitter/owners/${ownerId}/delete`, {
        method: "DELETE",
        credentials: "include"
    })
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    console.log(data);
    return data;
}

export async function getDogs() {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitter/dogs`, {
        method: "GET",
        credentials: "include"
    })
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    console.log(data);
    return data;
}

export async function getDog(dogId) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitter/dogs/${dogId}`, {
        method: "GET",
        credentials: "include"
    })
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error);
    }
    const data = await res.json();
    console.log(data);
    return data;
}

export async function addDog(ownerId, newData) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitter/owners/${ownerId}/dogs/add`, {
        method: "POST",
        credentials: "include",
        headers: {"Content-Type": "application/json"},
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

export async function updateDog(dogId, updatedData) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitter/dogs/${dogId}/update`, {
        method: "PUT",
        credentials: "include",
        headers: {"Content-Type": "application/json"},
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

export async function deleteDog(dogId) {
    const res = await fetch(`https://pawliday-backend.onrender.com/api/sitter/dogs/${dogId}/delete`, {
        method: "DELETE",
        credentials: "include"
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
    return data;
}