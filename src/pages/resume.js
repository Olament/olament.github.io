import React from "react"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import Experience from "../components/experience"

export default function About() {
  return (
    <Layout>
      <Helmet title={"Zixuan Guo"} />
      <header>
        <div className="container medium text-center">
          <h1>Zixuan Guo</h1> <br/>
          <span className="emoji">✉️️</span><a href="mailto:guozixua@grinnell.edu">guozixua@grinnell.edu</a>
        </div>
      </header>
      <div className="container medium">
        <h3 style={{paddingTop: "1rem", borderBottom: "1px solid var(--border)"}}>Experience</h3>
        <Experience data={{
          title: "PyTroch based unsupervisied monocular depth estimation network",
          position: "Researcher, Grinnell College, IA",
          time: "Jan 2019 – Present",
          description: [
            "Programmed mobile robot with ARIA C++ library to collect image, egomotion, and LiDAR sensor data.",
            "Processed the image and egomotion data from KITTI dataset with Numpy and OpenCV library and reconstructed" +
            "3D Point cloud from stereo images with Open3D library.",
            "Built a UNet-based neural network with PyTorch, used DataParallel for multi-GPU training scheme."
          ]
        }}/>
        <Experience data={{
          title: "Grinnell Campus directory: Native iOS APP for students and faculties",
          position: "Software Engineer, Grinnell, IA",
          time: "Sep 2018 – Present",
          description: [
            "Implemented network reachability detection and directory search query with URLSession.",
            "Parsing backend JSON response with iOS Codable protocol and displaying data with self-sizing UITableView cell.",
            "Added user authentication function with WKWebview’s sharing cookie storage and custom loading callback.",
            "Designed and maintained OpenAPI documentation for iOS frontend and Ruby on Rails backend with Swagger."
          ]
        }}/>
        <Experience data={{
          title: "Golang based IM APP backend",
          position: "Software Engineer, Huawei, Shenzhen",
          time: "Dec 2018 – Jan 2019",
          description: [
            "Developed the middleware with Golang Gin Web framework for logging and content type verifying.",
            "Implemented server performance monitoring web interface with gopsutil and JavaScript.",
            "Utilized pprof for stress profiling and bottleneck detection; Created a continous deployment pipeline with Jenkins.",
          ]
        }}/>

        <h3 style={{marginTop: "0.25rem", paddingTop: "1rem", borderBottom: "1px solid var(--border)"}}>Projects</h3>
        <Experience data={{
          title: "gDHT: A self-hosted distributed torrent search engine suite",
          link: "https://github.com/Olament/gDHT",
          tags: ["Golang", "Docker", "Redis", "ElasticSearch", "Spring"],
          description: [
            "Implemented BiTorrent mainline DHT network crawler using Golang and server-client communication with gRPC.",
            "Crawler cluster management with Docker Swarm; Buffer and filter incoming client data with Redis message queue" +
            "and bloom filter based on Redis bitmap; Bulk indexing the data asynchronously with ElasticSearch.",
            "Developed the web interface with Java Spring boot and Integrated ElasticSearch query with Spring Data.",
          ]
        }}/>
        <Experience data={{
          title: "DeepMushroom: Mushroom identification webservice",
          link: "https://github.com/Olament/DeepMushroom",
          tags: ["Golang", "Python", "PyTorch", "Flask", "mongoDB"],
          description: [
            "Collected 40k images with Golang crawler and performed data cleansing with Python Pandas framework.",
            "Trained the ResNet classifier on imbalanced datasets with PyTorch using Focal loss and Oversampling techniques.",
            "Deployed the model with Docker and Travis CI and served the model via a Restful API with Flask and Gunicorn.",
            "Cached inference query using perception image hash with mongoDB and enable continual online learning.",
          ]
        }}/>
        <Experience data={{
          title: "AbstractKeyboard: iOS Chinese Pinyin keyboard APP",
          link: "https://github.com/Olament/Hanzi2PinyinEngine",
          tags: ["Swift", "SQLite"],
          description: [
            "Implemented dynamic keyboard layout programmatically with AutoLayout and custom UIView; Created button tap animation with UIView Core Animation and CATransaction.",
            "Built Swift Pinyin inference engine based on Statistical Language Model and graph-based Hidden Markov Chain.",
            "Optimized inference time with concurrent tasks using DispatchQueue and LRU-Cached SQLite query.",
          ]
        }}/>
        <Experience data={{
          title: "DepthNet: Supervisied monocular depth estimation network",
          link: "https://github.com/Olament/DepthNet",
          tags: ["Swift", "Python", "PyTorch"],
          description: [
            "Monocular depth estimation with feature extracting Res-Net backbone and up-sampling blocks using PyTorch.",
            "Built an iOS Application to collect ground-truth depth maps with iPhone TrueDepth camera and Metal framework.",
          ]
        }}/>
      </div>
    </Layout>
  )
}
