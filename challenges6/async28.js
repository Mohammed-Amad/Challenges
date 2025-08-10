export async function fetchUsers28() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error(res.status + " - " + res.statusText);
  }
  return res.json();
}