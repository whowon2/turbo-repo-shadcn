import { Button } from "@repo/ui/components/shadcn/button";
import { Input } from "@repo/ui/components/shadcn/input";

export default function Home() {
  return (
    <div className="font-bold p-8 flex flex-col gap-4 justify-center items-center min-h-screen">
      <Button className="cursor-pointer" variant={"default"}>
        Butao grandao
      </Button>
      <Input />
    </div>
  );
}
