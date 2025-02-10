export const getLocation = async () => {
    try {
        const ipResponse = await fetch(`https://ipwhois.app/json/`)
        const ipData = await ipResponse.json()
        const { latitude, longitude } = ipData
        if (!latitude || !longitude) throw new Error("Location not found");

        const geoResponse = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)

        const geoData = await geoResponse.json()
        if (!geoData.address) throw new Error("Address Not Found");

        const { city, state, country, postcode } = geoData.address

        return { city, state, country, postcode }

    } catch (error) {
        console.error("Error fetching location:", error);
        return { city: "Unknown", state: "Unknown", country: "Unknown", postcode: "Unknown" };
    }

} 