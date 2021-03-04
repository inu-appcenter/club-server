import { Gathering } from '../entity/Gathering';

export interface IGatheringRepository {
  getGatherings(): Promise<Gathering[]>;
  createGathering(gathering: Gathering): Promise<Gathering>;
  updateGathering(gathering: Gathering): Promise<Gathering>;
  removeGatheringById(gatheringId: number): Promise<any>;
  getCommentsByGatheringId(gatheringId: number): Promise<Comment[]>;
  closeGatheringById(gatheringId: number): Promise<any>;
}
