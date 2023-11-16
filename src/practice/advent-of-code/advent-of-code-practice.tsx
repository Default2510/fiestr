import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AdventOfCode } from './advent-of-code';

export const AdventOfCodePractice = () => {
  const days: Array<number> = [1, 2, 3, 5];

  return (
    <Tabs defaultValue="overview">
      <TabsList>
        {days.map((i) => {
          return (
            <TabsTrigger value={'day' + i}>Day {i}</TabsTrigger>
          );
        })}
      </TabsList>
      {days.map((i) => {
        return (
          <TabsContent value={'day' + i}>
            <AdventOfCode day={i} />
          </TabsContent>
        );
      })}
    </Tabs>
  );
};
