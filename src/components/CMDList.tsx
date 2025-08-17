
import { DATA_DEU } from "@/service/data";

const CMDList = () => 
{

    let lang = DATA_DEU
  
    return (
        <>
            {lang.cmdList1}
                <h4 className="mb-6 mt-6 text-xl font-semibold">{lang.cmdTitle6}</h4>
                <p className="mb-6 mt-6 text-gray-800">{lang.cmdBio9}</p>
                {lang.cmdL1}
                <h4 className="mb-6 mt-6 text-xl font-semibold">{lang.cmdTitle7}</h4>
                <p className="mb-6 mt-6 text-gray-800">{lang.cmdBio10}</p>
                {lang.cmdL2}
                <h4 className="mb-6 mt-6 text-xl font-semibold">{lang.cmdTitle8}</h4>

                <p className="mb-6 mt-6 text-gray-800">{lang.cmdBio11}</p>
                {lang.cmdLbjorn}
                <h4 className="mb-6 mt-6 text-xl font-semibold">{lang.cmdTitle9}</h4>
                <p className="mb-6 mt-6 text-gray-800">{lang.cmdBio12}</p>
                <p className="mb-6 mt-6 font-semibold">{lang.cmdTitlebjorn3}</p>
                {lang.cmdL4}
        </>
    );
}

export default CMDList