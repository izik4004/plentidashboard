import OfferCard from "@/components/providers/offer-card";
import { Button } from "@/components/ui/button";



const PromotionsPage = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between py-2">
        <h3 className="font-semibold ">Promotions & Offers</h3>
        <Button
          type="button"
          variant="ghost"
          size="lg"
          className="bg-black  text-white rounded-xl hover:bg-black-100 hover:text-white"
        >
          Add a new offer
        </Button>
      </div>
      <div className="">
        <OfferCard />
      </div>

    </div>
  );
}

export default PromotionsPage;