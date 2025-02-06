import React from "react";

const ProductComparisonGrid: React.FC = () => {
    const data = [
        {
            category: "General",
            specs: [
                { label: "Sales Package", value1: "1 Sectional sofa", value2: "1 Three Seater, 2 Single Sofas" },
                { label: "Model Number", value1: "TFGSD453654", value2: "DFHJSD78932" },
                { label: "Secondary Material", value1: "Solid Wood", value2: "Solid Wood" },
                { label: "Configuration", value1: "L-shaped", value2: "L-shaped" },
                { label: "Upholstery Color", value1: "Bright Grey & Lush", value2: "Bright Grey & Lush" },
            ],
        },
        {
            category: "Product",
            specs: [
                { label: "Filling Material", value1: "Foam", value2: "Micro" },
                { label: "Frame Type", value1: "Bright Grey & Lush", value2: "Bright Grey & Lush" },
                { label: "Adjustable Headrest", value1: "Yes", value2: "Yes" },
                { label: "Maximum Load Capacity", value1: "250 kg", value2: "300 kg" },
                { label: "Origin of Manufacture", value1: "India", value2: "India" },
            ],
        },
        {
            category: "Dimensions",
            specs: [
                { label: "Width", value1: "295.25 cm", value2: "298.35 cm" },
                { label: "Height", value1: "75 cm", value2: "76 cm" },
                { label: "Depth", value1: "90 cm", value2: "85 cm" },
                { label: "Seat Height", value1: "45 cm", value2: "47 cm" },
                { label: "Weight", value1: "54.05 kg", value2: "61.50 kg" },
            ],
        },
        {
            category: "Warranty",
            specs: [
                { label: "Warranty Summary", value1: "1 Year Manufacturing Warranty", value2: "1 Year Manufacturing Warranty" },
                { label: "Warranty Service Type", value1: "By Manufacturer", value2: "By Manufacturer" },
                { label: "Covered in Warranty", value1: "Manufacturing Defects", value2: "Manufacturing Defects" },
                { label: "Not Covered in Warranty", value1: "Wear & Tear", value2: "Wear & Tear" },
                { label: "Domestic Warranty", value1: "1 Year", value2: "3 Years" },
            ],
        },
    ];

    return (
        <div className="container mx-auto p-6">
            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="border border-gray-300 p-3 w-1/4">Feature</th>
                            <th className="border border-gray-300 p-3 w-1/4">Product 1</th>
                            <th className="border border-gray-300 p-3 w-1/4">Product 2</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((section, index) => (
                            <React.Fragment key={index}>
                                <tr className="bg-gray-200">
                                    <td colSpan={3} className="border border-gray-300 p-3 font-bold">{section.category}</td>
                                </tr>
                                {section.specs.map((spec, i) => (
                                    <tr key={i} className="border border-gray-300">
                                        <td className="border border-gray-300 p-3">{spec.label}</td>
                                        <td className="border border-gray-300 p-3">{spec.value1}</td>
                                        <td className="border border-gray-300 p-3">{spec.value2}</td>
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductComparisonGrid;