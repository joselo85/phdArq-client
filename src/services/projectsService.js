import httpService from './httpService'

const projectsEndpoint = '/projects'

export function getAllProjects() {
  return httpService.get(projectsEndpoint)
}

export function getProjectById(id) {
  return httpService.get(`${projectsEndpoint}/${id}`)
}
