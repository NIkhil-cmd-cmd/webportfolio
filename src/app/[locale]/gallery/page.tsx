"use client"; // Marking this component as a Client Component

import { Flex, Modal } from "@/once-ui/components";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { baseURL, renderContent } from "@/app/resources";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Gallery(
	{ params: { locale }}: { params: { locale: string }}
) {
	const t = useTranslations();
	const { gallery, person } = renderContent(t);
	const [selectedImage, setSelectedImage] = useState(null);

	const handleImageClick = (image: { src: string; alt: string }) => {
		setSelectedImage(image);
	};

	const handleCloseModal = () => {
		setSelectedImage(null);
	};

	return (
		<Flex fillWidth>
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'ImageGallery',
						name: gallery.title,
						description: gallery.description,
						url: `https://${baseURL}/gallery`,
						image: gallery.images.map((image) => ({
                            '@type': 'ImageObject',
                            url: `${baseURL}${image.src}`,
                            description: image.alt,
                        })),
						author: {
							'@type': 'Person',
							name: person.name,
                            image: {
								'@type': 'ImageObject',
								url: `${baseURL}${person.avatar}`,
							},
						},
					}),
				}}
			/>
			<MasonryGrid onImageClick={handleImageClick} />
			{selectedImage && (
				<Modal onClose={handleCloseModal}>
					<img src={`${baseURL}${selectedImage.src}`} alt={selectedImage.alt} />
					<button onClick={handleCloseModal}>Close</button>
				</Modal>
			)}
		</Flex>
	);
}