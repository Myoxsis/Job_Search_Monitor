import {useState, useEffect} from 'react';
import axios from 'axios';

export default function useBookSearch(query, pageNumber) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [offers, setOffers] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setLoading(true)
        setError(false)
        var cancel
        axios({
            method: 'GET',
            url: 'http://localhost:1337/offers/',
            params: {q: query, page: pageNumber},
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {

            setOffers(prevOffers => {
                return [...prevOffers, res.data.map((b, index) => data[index].name)]
            })
            setHasMore(res.data.length > 0)
            setLoading(false)
            console.log(res)
            console.log(res.data.length)
        }).catch(e => {
            if(axios.isCancel(e)) return
        })
        return () => cancel()
    }, [query, pageNumber])
    return { loading, error, offers, hasMore }
}
