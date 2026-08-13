export function toInitials(fullName) {
  return fullName
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase())
    .join("");
}
