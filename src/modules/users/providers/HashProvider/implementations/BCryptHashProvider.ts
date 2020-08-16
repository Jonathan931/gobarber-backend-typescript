import { hash, compare } from 'bcryptjs';
import IHashProdiver from '../models/IHashProvider';

class BCryptHashProvider implements IHashProdiver {
  public async generateHash(payload: string): Promise<string> {
    return hash(payload, 8);
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}

export default BCryptHashProvider;
