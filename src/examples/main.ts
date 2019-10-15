import { Client, DiscogsError } from '../client';
import { ArtistMaster } from '../types';
import Debug from 'debug'

Debug.enable('discogs-client')

async function main() {

  const discogs = new Client({
    auth: {
      token: 'IzSqDBseMpKBZIzWcNxKICEcIRfuhMluLedYuCpT'
    }
  })

  const { results } = await discogs.search({ query: "Pink Floyd",  })

  const { releases: page1, pagination: { pages } } =
    await discogs.getArtistReleases(
      results.filter(_ => _.type === 'artist')[0].id,
      {
        per_page: 100,
        sort: 'year'
      }
    )

  const printArtistMaster = async (artistMaster: ArtistMaster) => {
    try {
      const master = await discogs.getMaster(artistMaster.id)
      const mainRelease = await discogs.getRelease(artistMaster.main_release)
      console.log('master', master.title)
      console.log('master', mainRelease.title)
    } catch (error) {
      if (error instanceof DiscogsError) {
        console.log(error.code)
      }
    }
  }

  page1.filter(_ => _.role == 'Main')
    .forEach(release => {
      if (release.type === 'master')
        printArtistMaster(release)
    })


}

main()