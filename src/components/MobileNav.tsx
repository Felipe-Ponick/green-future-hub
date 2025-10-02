import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-8">
          <Link 
            to="/" 
            className="text-lg font-medium hover:text-eco-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Início
          </Link>
          <Link 
            to="/impactos" 
            className="text-lg font-medium hover:text-eco-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Impactos
          </Link>
          <Link 
            to="/dados" 
            className="text-lg font-medium hover:text-eco-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Dados
          </Link>
          <Link 
            to="/about" 
            className="text-lg font-medium hover:text-eco-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            O que é TI Verde
          </Link>
          <Link 
            to="/calculator" 
            className="text-lg font-medium hover:text-eco-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Calculadora
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};
