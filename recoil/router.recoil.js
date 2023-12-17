import { atom } from 'recoil';

const router = atom({
  key: 'router',
  default: '',
});

export const recoilRouter = {
    router
}