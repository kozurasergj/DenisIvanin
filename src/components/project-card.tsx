import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
}

export function ProjectCard({ img, title, desc }: ProjectCardProps) {
  return (
    <Card placeholder='Typography' color='transparent' shadow={false}>
      <CardHeader
        placeholder='Typography'
        floated={false}
        className='mx-0 mt-0 mb-6 h-48'
      >
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className='h-full w-full object-cover'
        />
      </CardHeader>
      <CardBody placeholder='Typography' className='p-0'>
        <a
          href='#'
          className='text-blue-gray-900 transition-colors hover:text-gray-800'
        >
          <Typography placeholder='Typography' variant='h5' className='mb-2'>
            {title}
          </Typography>
        </a>
        <Typography
          placeholder='Typography'
          className='mb-6 font-normal !text-gray-500'
        >
          {desc}
        </Typography>
        <Button placeholder='Typography' color='gray' size='sm'>
          see details
        </Button>
      </CardBody>
    </Card>
  )
}

export default ProjectCard;
