import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Divider, List, ListItem, ListItemText, Tooltip } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const Recipe = ({ title, image, ingredients }) => {
  const [expanded, setExpanded] = React.useState(false);

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 325, margin: "0px auto 20px" }}>
      <CardHeader
        titleTypographyProps={{ variant: "h6" }}
        sx={{
          textOverflow: "ellipsis",
          whiteSpace: 'nowrap', 
         
        }}
        title={title}
      />
      <CardMedia component="img" height="194" image={image} alt={image.title} />
      <CardActions disableSpacing>
        <Tooltip title="Save recipe">
          <BookmarkIcon />
        </Tooltip>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Tooltip title="See more">
            <ExpandMoreIcon />
          </Tooltip>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <div style={{ marginBottom: 10, fontSize: 18 }}>Ingredients </div>
          <Divider variant="fullWidth" />
          <List>
            {ingredients.map((ingredient, index) => (
              <ListItem key={index}>
                <ListItemText primary={ingredient.text} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Recipe;
// {ingredients.map((ingredient, index) => (
//   <Typography key={index}>{ingredient.text}</Typography>
// ))}
