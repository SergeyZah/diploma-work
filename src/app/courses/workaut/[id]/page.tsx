import Workaut from '@/components/Workaut/Workaut';
import { dataWorkauts } from '@/dataWorks';

export default function WorkautPage() {
  const workout = dataWorkauts.find((workaut) => workaut._id === 'kcx5ai');
  console.log(workout);
  return <Workaut workaut={workout!} />;
}
