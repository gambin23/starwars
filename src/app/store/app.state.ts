import { Resident } from '../models/resident.model';
import { PlanetList } from '../models/planet-list.model';
import { Planet } from '../models/planet.model';
import { User } from '../models/user.model';
import { Image } from '../models/image.model';
import { IDictionary } from '../models/dictionary.interface';

export interface IAppState {
  planets: {
    currentList: PlanetList,
    planets: Planet[],
    loading: boolean,
    error: string
  };
  residents: {
    residents: Resident[],
    loading: boolean,
    error: string,
    view: string,
    images: IDictionary<string>
  };
  favourites: string[];
  account: {
    user: User,
    authenticated: boolean,
    loading: boolean,
    error: string
  };
}

export const AppState: IAppState = {
  planets: {
    currentList: null,
    planets: [],
    loading: false,
    error: null
  },
  residents: {
    residents: [],
    loading: false,
    error: null,
    view: 'cards',
    images: {
      'Cordé': 'https://vignette.wikia.nocookie.net/starwars/images/b/b6/Cord%C3%A9_-_SW_Card_Trader.png/revision/latest?cb=20160713053607',
      'Dormé': 'https://vignette.wikia.nocookie.net/starwars/images/1/18/Dormesenate.jpg/revision/latest?cb=20070506233854',
      'Gregar Typho': 'https://vignette.wikia.nocookie.net/starwars/images/5/52/Gregar_Typho.jpg/revision/latest?cb=20090903192036',
      'Jar Jar Binks': 'https://vignette.wikia.nocookie.net/starwars/images/d/d2/Jar_Jar_aotc.jpg/revision/latest?cb=20080303052132',
      'Padmé Amidala': 'https://vignette.wikia.nocookie.net/starwars/images/b/b2/Padmegreenscrshot.jpg/revision/latest?cb=20100423143631',
      'Palpatine': 'https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png/revision/latest?cb=20130620100935',
      'Quarsh Panaka': 'https://vignette.wikia.nocookie.net/starwars/images/7/72/PanakaHS-TPM.png/revision/latest?cb=20130126044005',
      'R2-D2': 'https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png/revision/latest?cb=20161108040914',
      'Ric Olié': 'https://vignette.wikia.nocookie.net/starwars/images/4/4c/RicOlieHS-SWE.png/revision/latest?cb=20120226230538',
      'Roos Tarpals': 'https://vignette.wikia.nocookie.net/starwars/images/c/ca/TarpalsHS.jpg/revision/latest?cb=20180218034913',
      'Rugor Nass': 'https://vignette.wikia.nocookie.net/starwars/images/d/d8/Bossnass.jpg/revision/latest?cb=20171019170439',
      'Anakin Skywalker': 'https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png/revision/latest?cb=20130621175844',
      'Beru Whitesun lars': 'https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png/revision/latest?cb=20170713063118',
      'Biggs Darklighter': 'https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png/revision/latest?cb=20130305010406',
      'C-3PO': 'https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png/revision/latest?cb=20180121052644',
      'Cliegg Lars': 'https://vignette.wikia.nocookie.net/starwars/images/3/36/ClieggLarsHS-SWE.jpg/revision/latest?cb=20180513065414',
      'Darth Vader': 'https://i.pinimg.com/236x/4a/ba/5e/4aba5e6dd96ac315671a00e7e6ea3899.jpg',
      'Luke Skywalker': 'https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg/revision/latest?cb=20170927034529',
      'Owen Lars': 'https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png/revision/latest?cb=20171108050140',
      'R5-D4': 'https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png/revision/latest?cb=20160809033145',
      'Shmi Skywalker': 'https://vignette.wikia.nocookie.net/starwars/images/a/ad/ShmiSkywalkerDatabank_%28Repurposed%29.jpeg/revision/latest?cb=20171114023541'

    }
  },
  favourites: [],
  account: {
    user: null,
    authenticated: false,
    loading: false,
    error: null
  }
};
