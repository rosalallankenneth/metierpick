import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllResults } from "../../firebase/assessment";

// custom components
import ContentTitleBar from "../global/ContentTitleBar";
import { Box, Typography } from "@material-ui/core";
import AssessmentTiles from "./AssessmentTiles";
import LoadingAnimation from "../global/Loading";
import EmptyList from "./EmptyList";
import { formatResultsData } from "../../utils/formatResultsData";

const getAllRatingsFromDB = async (email, setResultsList, setLoading) => {
  const ratings = await getAllResults(email);
  setResultsList(ratings);
  setLoading(false);
};

const AssessmentHistoryContent = () => {
  const email = useSelector(state => state.auth.user.email);
  const [resultsList, setResultsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllRatingsFromDB(email, setResultsList, setLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ContentTitleBar title="Assessment History" />
      <Box mt={2}>
        <Typography variant="caption">Completed</Typography>
        {loading ? (
          <LoadingAnimation />
        ) : resultsList.length === 0 ? (
          <EmptyList />
        ) : (
          resultsList.map(item => {
            item = formatResultsData(item);
            return (
              <Box key={item.ratingsID} mt={1}>
                <AssessmentTiles incomplete={false} resultsData={item} />
              </Box>
            );
          })
        )}
      </Box>
    </>
  );
};

export default AssessmentHistoryContent;
