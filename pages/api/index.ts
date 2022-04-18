const ROOT = 'https://api.football-data.org/v2/'

export const searchTeamList = async () => {
  const res = await fetch(ROOT + 'competitions/PD/teams', {
    headers: {
      'X-Auth-Token': '5f3ece105a1142af826ed06aa1872c0c'
    }
  })
  const data = await res.json()
  return data
}
export const searchTeam = async (teamId) => {
  const res = await fetch(`${ROOT}teams/${teamId}`, {
    headers: {
      'X-Auth-Token': '5f3ece105a1142af826ed06aa1872c0c'
    }
  })
  const data = await res.json()
  return data
}
export const searchCompetition = async (competitionId) => {
  const res = await fetch(`${ROOT}competitions/${competitionId}`, {
    headers: {
      'X-Auth-Token': '5f3ece105a1142af826ed06aa1872c0c',
    }
  }
  )
  const data = await res.json()
  return data
}