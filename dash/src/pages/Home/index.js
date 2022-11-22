import { SearchInput } from './../../components/SearchInput'
import { StyledHome } from './styles';
import { getByName } from '../../services/Summoners'
export function Home() {
  const servers = [
    { label: 'BR1', value: 'br1' },
    { label: 'EUN1', value: 'eun1' },
    { label: 'EUW1', value: 'euw1' },
    { label: 'JP1', value: 'jp1' },
    { label: 'KR', value: 'kr' },
    { label: 'LA1', value: 'la1' },
    { label: 'LA2', value: 'la2' },
    { label: 'NA1', value: 'NA2' },
    { label: 'OC1', value: 'oc1' },
    { label: 'TR1', value: 'tr1' },
    { label: 'RU', value: 'ru' },
  ]

  getByName('Haus of Dereon');

  return (
    <StyledHome>
      sdsd
      <SearchInput servers={servers} label="Digite o seu ID" searchAction={console.log} />
    </StyledHome>
  );
}