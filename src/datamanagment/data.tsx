import data from "../data.json";

const base = import.meta.env.BASE_URL;

export function getProfilePicURL() {
  return `${base}${data.profilepicURL}`;
}
export function getBannerPicURL() {
  return `${base}${data.bannerURL}`;
}
export function getDescription() {
  return data.description;
}
export function getTitle() {
  return data.title;
}
export function getTechnologies() {
  return data.technologies;
}
export function getProjects() {
  return data.projects.map(p => ({
    ...p,
    image: `${base}${p.image}`
  }));
}
