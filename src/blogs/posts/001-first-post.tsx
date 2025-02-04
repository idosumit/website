import { BlogPost } from "../types";
import { Text } from "../../components/Text";
import { Link } from "react-router-dom";

export const post: BlogPost = {
	id: 1,
	title: "My First Blog Post",
	slug: "my-first-blog-post",
	date: "2024-03-01",
	content: () => (
		<>
			<Text as="p">This is the content of my first blog post...</Text>

			<Text as="p">
				We can use full TSX here, including our Text components!
			</Text>

			<Text as="p">
				Let's talk about the Transformer architecture. The Transformer is a
				neural network architecture that is used for natural language processing
				tasks. It is a type of encoder-decoder model that uses self-attention to
				process the input sequence.
			</Text>

			<Text as="p">
				The Transformer architecture is composed of an encoder and a decoder.
				The encoder takes the input sequence and encodes it into a sequence of
				hidden states. The decoder takes the encoded sequence and decodes it
				into a sequence of output states.
			</Text>

			<Text as="p">
				The encoder and decoder are both composed of a stack of identical
				layers. Each layer has a multi-head attention mechanism and a
				feed-forward network.
			</Text>

			<Text as="p">
				The multi-head attention mechanism allows the model to attend to
				different parts of the input sequence. The feed-forward network is a
				simple network that is used to transform the hidden states.
			</Text>

			<Text as="p">
				The self-attention mechanism allows the model to attend to different
				parts of the input sequence. The feed-forward network is a simple
				network that is used to transform the hidden states.
			</Text>

			<Text as="p">
				The Transformer architecture is a very powerful architecture that is
				used for natural language processing tasks. It is a type of
				encoder-decoder model that uses self-attention to process the input
				sequence.
			</Text>

			<Text as="p">
				Let's talk about the Transformer architecture. The Transformer is a
				neural network architecture that is used for natural language processing
				tasks. It is a type of encoder-decoder model that uses self-attention to
				process the input sequence.
			</Text>

			<Text as="p">
				The Transformer architecture is composed of an encoder and a decoder.
				The encoder takes the input sequence and encodes it into a sequence of
				hidden states. The decoder takes the encoded sequence and decodes it
				into a sequence of output states.
			</Text>

			<Text as="p">
				The encoder and decoder are both composed of a stack of identical
				layers. Each layer has a multi-head attention mechanism and a
				feed-forward network.
			</Text>

			<Text as="p">
				The multi-head attention mechanism allows the model to attend to
				different parts of the input sequence. The feed-forward network is a
				simple network that is used to transform the hidden states.
			</Text>

			<Text as="p">
				The self-attention mechanism allows the model to attend to different
				parts of the input sequence. The feed-forward network is a simple
				network that is used to transform the hidden states.
			</Text>

			<Text as="p">
				The Transformer architecture is a very powerful architecture that is
				used for natural language processing tasks. It is a type of
				encoder-decoder model that uses self-attention to process the input
				sequence.
			</Text>

			<Text variant="blue" type="highlight">
				<Link to="/blog">Back to Blog</Link>
			</Text>
		</>
	),
};
