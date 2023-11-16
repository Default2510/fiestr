import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AdventOfCode } from './advent-of-code';

export const AdventOfCodePractice = () => {
  const days: Array<number> = new Array<number>(3).fill(0);

  return (
    <Tabs defaultValue="overview">
      <TabsList>
        {days.map((i, index) => {
          return (
            <TabsTrigger value={'day' + index}>Day {index + 1}</TabsTrigger>
          );
        })}
      </TabsList>
      {days.map((i, index) => {
        return (
          <TabsContent value={'day' + index}>
            <AdventOfCode day={index + 1} />
          </TabsContent>
        );
      })}
    </Tabs>
  );
};
