import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AdventOfCode } from './advent-of-code';

export const AdventOfCodePractice = () => {
  const days: Array<{ year: number; day: number }> = [
    { year: 2021, day: 1 },
    { year: 2021, day: 2 },
    { year: 2021, day: 3 },
    { year: 2024, day: 1 },
    { year: 2024, day: 2 },
    { year: 2024, day: 3 },
    { year: 2024, day: 4 },
    { year: 2024, day: 5 },
  ];

  return (
    <Tabs defaultValue="overview">
      <TabsList>
        {days.map(i => {
          return (
            <TabsTrigger value={'year' + i.year + 'day' + i.day}>
              Day {i.day}
            </TabsTrigger>
          );
        })}
      </TabsList>
      {days.map(i => {
        return (
          <TabsContent value={'year' + i.year + 'day' + i.day}>
            <AdventOfCode
              day={i.day}
              year={i.year}
            />
          </TabsContent>
        );
      })}
    </Tabs>
  );
};
