import React from 'react';
import Sidebar from '../components/Sidebar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import { LocalGroceryStore } from '@mui/icons-material';

export default function Container() {
  return (
    <div className="container">
      <Sidebar />
      {/**Content */}
      <div className="content">
        <div className="content__header">Button</div>

        <div className="content__row">
          <Button label="<Button />">Default</Button>
          <Button label="&:hover, &:focus" hover>
            Default
          </Button>
        </div>

        <div className="content__row">
          <Button
            label='<Button variant="outline" />'
            variant="outline"
            color="primary"
          >
            Default
          </Button>
          <Button
            label="&:hover, &:focus"
            hover
            variant="outline"
            color="primary"
          >
            Default
          </Button>
        </div>

        <div className="content__row">
          <Button
            label='<Button variant="text" />'
            variant="text"
            color="primary"
          >
            Default
          </Button>
          <Button label="&:hover, &:focus" hover variant="text" color="primary">
            Default
          </Button>
        </div>

        <div className="content__row">
          <Button
            label="<Button disableShadow />"
            disableShadow
            color="primary"
          >
            Default
          </Button>
        </div>

        <div className="content__row">
          <Button label="<Button disabled />" disabled>
            Default
          </Button>
        </div>

        <div className="content__row">
          <Button
            label='<Button startIcon="local_grocery_store" />'
            startIcon={<LocalGroceryStore />}
            color="primary"
          >
            Default
          </Button>
          <Button
            label='<Button endIcon="local_grocery_store" />'
            endIcon={<LocalGroceryStore />}
            color="primary"
          >
            Default
          </Button>
        </div>

        <div className="content__row">
          <Button label='<Button size="sm" />' size="sm" color="primary">
            Default
          </Button>
          <Button label='<Button size="md" />' size="md" color="primary">
            Default
          </Button>
          <Button label='<Button size="lg" />' size="lg" color="primary">
            Default
          </Button>
        </div>
        <div className="content__row">
          <Button label='<Button color="default" />' color="default">
            Default
          </Button>
          <Button label='<Button color="primary" />' color="primary">
            Primary
          </Button>
          <Button label='<Button color="secondary" />' color="secondary">
            Secondary
          </Button>
          <Button label='<Button color="danger" />' color="danger">
            Danger
          </Button>
        </div>
        <div className="content__row">
          <Button label="&:hover, &:focus" color="default" hover>
            Default
          </Button>
          <Button color="primary" hover>
            Primary
          </Button>
          <Button color="secondary" hover>
            Secondary
          </Button>
          <Button color="danger" hover>
            Danger
          </Button>
        </div>
        <Footer />
      </div>
    </div>
  );
}
