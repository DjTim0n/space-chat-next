import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { AuthForm } from "../form/auth-form";
import { RegForm } from "../form/reg-form";

export const AuthTabs = () => {
  return (
    <>
      <Tabs defaultValue="auth" className="w-[400px] min-h-[400px] h-full grid">
        <TabsList className="grid w-3/4 grid-cols-2 justify-self-center">
          <TabsTrigger value="auth">Sing In</TabsTrigger>
          <TabsTrigger value="reg">Sing Up</TabsTrigger>
        </TabsList>
        <TabsContent value="auth" className="min-h-[250px] h-full">
          <AuthForm />
        </TabsContent>
        <TabsContent value="reg" className="min-h-[250px] h-full">
          <RegForm />
        </TabsContent>
      </Tabs>
    </>
  );
};
