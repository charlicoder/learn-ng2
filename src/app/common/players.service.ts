import { Injectable } from '@angular/core';

import { Player } from './players/player';
import { MOCK_PLAYERS } from './players/mock-players';


@Injectable()
export class PlayerApiService {

	getAllPlayerList(): Player[] {
		return MOCK_PLAYERS;
	}
}